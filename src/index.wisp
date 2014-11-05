(ns mnw.index
  "Create a Markov generator"
  (:require
    [wisp.runtime :refer [dec nil?]]
    [wisp.string :refer [join split]]
    [wisp.sequence :refer [map last]]
    [mnw.errors :refer [logError]]
    [mnw.io :refer [get-from-wiki get-from-file]]
    [mnw.generator :refer [teach]]))

(defmacro bind-fn [f & params]
  `(.bind ~f nil ~@params))

(defmacro ->
  "Chain promises"
  [& operations]
  (reduce
   (fn [form operation]
     (cons `.then
       (if (vector? operation)
         (cons form operation)
         (list form operation))))
   operations))

(defn- flatten [token]
  (last (split token "|")))

(defn- print-multiple [total maxlen markov]
  (loop [i total]
    (if (> i 0)
      (do
        (print (join " " (map flatten (.chain markov maxlen))))
        (recur (dec i))))))

(defn- get-proverbs [filename]
  (if (nil? filename)
    (get-from-wiki)
    (get-from-file filename)))

(defn main [program]
  (->
    (get-proverbs (.-input program))
    (bind-fn teach (.-ngram program))
    (bind-fn print-multiple (.-count program) (.-maxlen program))
    [nil logError]))
