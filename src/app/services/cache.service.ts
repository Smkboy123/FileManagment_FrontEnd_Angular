import { ObservableStore } from "@codewithdan/observable-store"
import { StoreState } from "../components/login/store/store-state"


export abstract class CacheService extends ObservableStore<StoreState>  {
    protected getItem<T>(key: string): T | null {
      const data = localStorage.getItem(key)
      if (data != null) {
        return JSON.parse(data)
      }
      return null
    }

    protected setItem(key: string, data: object | string) {
      if (typeof data === 'string') {
        localStorage.setItem(key, data)
      }
      localStorage.setItem(key, JSON.stringify(data))
    }

    protected removeItem(key: string) {
      localStorage.removeItem(key)
    }

    protected clear() {
      localStorage.clear();
      this.setState({}, 'Clear state');
      ObservableStore.clearState();
    }
  }
