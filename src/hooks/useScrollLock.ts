import { useCallback } from "react";

export const useScrollLock = () => {
    
    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    const unLockScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
    }, []);

    return { lockScroll, unLockScroll };
}