(ns mnw.index 
  "Create a Markov generator"
  (:require 
    [mnw.generator :refer [getGenerator]]))

;include macros.wisp

(defn printMultiple [total gen]
  (loop [i total]
    (if (> i 0)
      (do
        (print (gen))
        (recur (- i 1))))))

(defn main [program]
  (->
    (getGenerator)
    (.bind printMultiple nil (.-count program))))
