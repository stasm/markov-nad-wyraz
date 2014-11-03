(ns mnw.generator 
  "Create a Markov generator"
  (:require 
    [promise :as Promise]
    [polish-proverbs :as pp]
    [titlegen]))

;include macros.wisp

(promisify getProverbs []
  (pp (fn [txt] 
    (resolv (.split txt "\n")))))

(defn resetMarkovChain [proverbs]
  (.feed titlegen proverbs)
  titlegen)

(defn getGenerator []
  (-> (getProverbs) resetMarkovChain))
