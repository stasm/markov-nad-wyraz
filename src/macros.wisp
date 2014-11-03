(defmacro promisify
  [name args & body]
  `(defn ~name ~args
     (Promise. (fn [resolv reject] ~@body))))

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
