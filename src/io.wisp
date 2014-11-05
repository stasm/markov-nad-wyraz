(ns mnw.io
  "Fetch the list of proverbs"
  (:require
    [wisp.runtime :refer [nil?]]
    [wisp.string :refer [split-lines]]
    [fs]
    [promise :as Promise]
    [polish-proverbs :as pp]))

(defmacro promisify
  [name args & body]
  `(defn ~name ~args
     (Promise. (fn [resolv reject] ~@body))))

(promisify get-from-wiki []
  (pp (fn [txt]
    (resolv (split-lines txt)))))

(promisify get-from-file [filename]
  (.readFile fs filename {:encoding "utf-8"}
    (fn [err, data]
      (if (not (nil? err))
        (reject err)
        (resolv (split-lines data))))))
