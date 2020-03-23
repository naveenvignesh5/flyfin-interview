import React, { useEffect } from "react";

import { Provider, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// import TicketCard from "./components/ticketCard/TicketCard";
import ConfigCard from "./components/ConfigCard/ConfigCard";

import { get_currency_base } from "./redux/actions/action-currency";

import store from "./redux/store";

import "./lib/i18n";
import "./styles/index.css";
import RateCard from "./components/RateCard/RateCard";

const App = () => {
  // const { rates, base } = useSelector(state => state.currency);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_currency_base());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="title">{t("title")}</h1>
      <div className="container">
        <ConfigCard />
      </div>
      <br />
      <div className="grid">
        <RateCard index={0} listing={{ price: 100 }} />
        <RateCard index={1} listing={{ price: 200 }} />
        <RateCard index={2} listing={{ price: 350 }} />
      </div>
    </div>
  );
};

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
