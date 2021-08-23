import { useEffect, useState } from 'react';

export const useStorage = (storageName: any, type: 'local' | 'session' = 'local') => {
    const storage = type === 'local' ? localStorage : sessionStorage

    const [storedValue, setStorage] = useState(() => {
        const item: any = storage.getItem(storageName)
        return JSON.parse(item)
    })

    useEffect(() => {
        storage.setItem(storageName, JSON.stringify(storedValue))
    }, [storedValue])

    const clearStorage = () => {
        storage.removeItem(storageName)
    }

    return [ storedValue, setStorage, clearStorage ]
}