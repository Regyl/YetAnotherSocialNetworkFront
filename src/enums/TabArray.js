import RecommendationTab from "../components/main/tabs/RecommendationTab";
import TourChoosingTab from "../components/main/tabs/TourChoosingTab";
import TourChoosingAutomaticTab from "../components/main/tabs/TourChoosingAutomaticTab";

class TabItem {
    constructor(name, number, component) {
        this.name = name;
        this.number = number;
        this.component = component;
    }

}

const TabArray = Object.freeze([
    new TabItem('Recommendations', 0, {RecommendationTab}),
    new TabItem('Choosing tour (Manual)', 1, {TourChoosingTab}),
    new TabItem('Choosing tour (Automatic)', 2, {TourChoosingAutomaticTab})
]);
export default TabArray;