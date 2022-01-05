import Vue from "vue";
import Vuex, { Store } from "vuex";
import { AppState } from "@/types";
import { getModule } from "vuex-module-decorators";
Vue.use(Vuex);

//#region storeRoot
import MyStore from "./se-module";
import MyStudio from "./sd-module"

const _store = new Vuex.Store({
  modules: {
    /* IMPORTANT: the module name "se" below must match exactly
      the "name" property declared in @Module annotation in ./se-module.tx */
    se: MyStore,
    sd: MyStudio
  }
});
export default _store;
export const SEStore = getModule(MyStore, _store);
export const StudioStore = getModule(MyStudio, _store);

//#endregion storeRoot

export const createStore = (): Store<AppState> =>
  new Vuex.Store({
    modules: {
      /* IMPORTANT: the module name "se" below must match exactly
      the "name" property declared in @Module annotation in ./se-module.tx */
      se: MyStore,
      gs: MyStudio
    }
  });
