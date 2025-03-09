import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import route from "./js/route";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Layout from "./Layout.vue";
import Home from "./pages/Home.vue";
import Expenses from "./components/Expenses.vue";
import Balance from "./components/Balance.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

const app = createApp(App);
app.component("Header", Header)
    .component("Footer", Footer)
    .component("Layout", Layout)
    .component("Home", Home)
    .component("Balance", Balance)
    .component("Expenses", Expenses)
    .component("TransactionList", TransactionList)
    .component("AddTransaction", AddTransaction);
app.use(route).mount("#app");
