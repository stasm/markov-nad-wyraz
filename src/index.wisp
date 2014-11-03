;include macros.wisp

(ns mnw.index
  "Create a Markov generator"
  (:require
    [mnw.generator :refer [getGenerator]]))

(defn- printMultiple [total gen]
  (loop [i total]
    (if (> i 0)
      (do
        (print (gen))
        (recur (- i 1))))))

(def getGenerator getGenerator)

(defn main [program]
  (->
    (getGenerator)
    (.bind printMultiple nil (.-count program))))
