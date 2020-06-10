import { useEffect, useState } from 'react'
import getFirebase from '../services/firebase'

const useFirebase = () => {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    setInstance(getFirebase())
  }, [])

  return instance
}

export default useFirebase
