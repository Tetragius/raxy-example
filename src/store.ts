import { raxyReact } from "@tetragius/raxy";
import { IStore } from "./interfaces";

const initStore: IStore = { todos: [], name: "", loading: false };

const instanse = raxyReact(initStore);

export const { store, transaction, subscribe, useRaxy } = instanse;
export default instanse;

// ***************
// Redux dev-tools
// ***************

let disableLogger = false;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({});

devTools?.init(initStore);
devTools?.subscribe((data: any) => {
  transaction("DEV-TOOLS", async (store) => {
    disableLogger = true;
    data.state && Object.assign(store, JSON.parse(data.state));
    return true;
  });
});

// ***
// log
// ***
subscribe("update", (e) => {
  const snapshot = JSON.parse(JSON.stringify(e.detail));
  console.log(
    "🐶 %cupdated",
    "color: white; background-color: #8dc149; padding: 4px; border-radius: 4px; text-align: center;",
    snapshot
  );
  if (!disableLogger) {
    devTools?.send(`anonymous change`, snapshot.store);
  }
  disableLogger = false;
});
subscribe("transactionstart", (e) => {
  const snapshot = JSON.parse(JSON.stringify(e.detail));
  console.log(
    "🐶 %ctransaction start: ",
    "color: white; background-color: #5b7add; padding: 4px; border-radius: 4px; text-align: center;",
    JSON.parse(JSON.stringify(e.detail))
  );
});
subscribe("transactionend", (e) => {
  const snapshot = JSON.parse(JSON.stringify(e.detail));
  console.log(
    "🐶 %ctransaction end: ",
    "color: white; background-color: #5b7add; padding: 4px; border-radius: 4px; text-align: center;",
    JSON.parse(JSON.stringify(e.detail))
  );
  if (e.detail.name !== "DEV-TOOLS") {
    devTools?.send(`transaction change: ${e.detail.name}`, snapshot.store);
  }
});
