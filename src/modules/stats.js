import Vue from 'vue';
import Vuex from 'vuex';
import Big from "big.js";

Vue.use(Vuex);

function initialState() {
    return {
        stuff: Big(0),
        stuffPerSecond: Big(0),

        timePlayed: Big(0),
        timePlayedThisPrestige: Big(0),

        timesPrestiged: Big(0),
    };
}

export default new Vuex.Store({
    state: initialState(),
    mutations: {
        resetState(state) {
            Object.assign(state, initialState());
        },

        newPrestige(state) {
            state.timePlayedThisPrestige = Big(0);
            state.timesPrestiged = state.timesPrestiged.plus(1);
        },

        addTime(state, n) {
            state.timePlayed = state.timePlayed.plus(n);
            state.timePlayedThisPrestige = state.timePlayedThisPrestige.plus(n);
        },

        setStuff(state, n) {
            state.stuff = Big(n);
        },

        setStuffPerSecond(state, n) {
            state.stuffPerSecond = Big(n);
        },
    }
});
