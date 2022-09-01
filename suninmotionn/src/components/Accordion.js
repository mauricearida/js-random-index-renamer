import React from "react";
import { List, ListHeader, ListItem } from "react-scrollable-accordion";
import "../index.css";

const Accordion = () => {
  return (
    <List stickyHeaders scrollBehavior="smooth">
      <ListHeader className="Header">Tasty Chinese Dishes</ListHeader>
      <ListItem>Sweet and Sour Pork</ListItem>
      <ListItem>Kung Pao Chicken</ListItem>
      <ListItem>Ma Po Tofu</ListItem>
      <ListItem>Wontons</ListItem>
      <ListItem>Cantonese</ListItem>
      <ListItem>Chow Mein</ListItem>
      <ListItem>Peking Roasted Duck</ListItem>
      <ListItem>Spring Rolls</ListItem>
      <ListItem>Shandong</ListItem>
      <ListItem>Hunan</ListItem>
      <ListHeader className="Header">
        Christmas Dishes in Traditional Russian Cuisine
      </ListHeader>
      <ListItem>Olivier salad</ListItem>
      <ListItem>Deviled eggs</ListItem>
      <ListItem>Pirozhki (stuffed buns)</ListItem>
      <ListItem>Dried mushroom soup</ListItem>
      <ListItem>Kulebyaka (Russian salmon pie)</ListItem>
      <ListItem>Peljmeni (Russian meat dumplings)</ListItem>
      <ListItem>Kutya/sochivo</ListItem>
      <ListItem>Vzvar (‘boil up’)</ListItem>
      <ListItem>Priyaniki (Russian spice/gingerbread cookies)</ListItem>
      <ListItem>Kolyadki (Russian Christmas cookies with curd cheese)</ListItem>
      <ListItem>Pampushky (Ukranian doughnuts)</ListItem>
      <ListItem>Kiev Cake</ListItem>
      <ListHeader className="Header">7 Jewish Foods</ListHeader>
      <ListItem>Traditional tzimmes from Martha Stewart</ListItem>
      <ListItem>Sauerkraut and pickles </ListItem>
      <ListItem>Jewish penicillin</ListItem>
      <ListItem>Israeli salad </ListItem>
      <ListItem>Shakshuka</ListItem>
      <ListItem>Tahini</ListItem>
      <ListItem>Mujaderra</ListItem>
      <ListHeader className="Header">Favorite Foods of Muhammad</ListHeader>
      <ListItem>Barley (Joo)</ListItem>
      <ListItem>Dates (Khajoor)</ListItem>
      <ListItem>Figs (Anjeer)</ListItem>
      <ListItem>Grapes (Angoor)</ListItem>
      <ListItem>Honey (Shehed)</ListItem>
      <ListItem>Melon (Kharbooza)</ListItem>
      <ListItem>Milk (Doodh)</ListItem>
      <ListItem>Mushroom</ListItem>
      <ListItem>Pomegranate (Anaar)</ListItem>
      <ListItem>Olive oil (Zaitoon ka teil)</ListItem>
      <ListItem>Vinegar (Sirka)</ListItem>
      <ListItem>Water (Paani)</ListItem>
    </List>
  );
};

export default Accordion;
