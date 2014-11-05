(ns mnw.ngram
  "Group tokens into n-grams"
  (:require
    [wisp.runtime :refer [dec]]
    [wisp.sequence :refer [vec reduce first rest last cons conj]]))

(defn- padl
  "Create a vector with item as the last element and n nil elements padded 
  from the left."
  [n item]
  (loop [result [item]
         n n]
    (if (identical? n 0)
      (vec result)
      (recur (cons nil result)
             (dec n)))))

(defn- ngramize
  "Create a vector of n-gram vectors."
  [result item]
  (conj result
        (conj (rest (last result)) item)))

(defn ngram
  "Group tokens into n-grams"
  [n tokens]
  (reduce ngramize 
          [(padl (dec n) (first tokens))]
          (rest tokens)))
