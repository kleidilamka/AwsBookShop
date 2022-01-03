import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import { ThemeContext } from "../../contexts/themeContext";
import { Category, Product } from "../../models";

interface CategoryFilterProps {
  changeCtg: (ctg: string) => void;
  categories: Category[];
  setActive: (
    value: React.SetStateAction<number | boolean | undefined>
  ) => void;
  active: boolean | number | undefined;
}

const CategoryFilter = (props: CategoryFilterProps) => {
  const { changeCtg, categories, setActive, active } = props;
  const { dark, theme } = useContext(ThemeContext);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: theme.backgroundColor }}
    >
      {/* All Books Component */}
      <TouchableOpacity
        key={1}
        onPress={() => {
          changeCtg("all"), setActive(-1);
        }}
      >
        {active === -1 ? (
          <View>
            <Text style={[styles.center, { color: theme.color }]}>All</Text>
            <View style={[styles.pointer, { backgroundColor: theme.color }]} />
          </View>
        ) : (
          <Text
            style={[
              styles.center,
              props.active === -1
                ? styles.active
                : !dark
                ? styles.inactive
                : styles.inactiveDark,
            ]}
          >
            All
          </Text>
        )}
        {/* List */}
      </TouchableOpacity>
      {categories.map((item: Category) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            changeCtg(item.id), console.log(item.id);
            setActive(categories.indexOf(item));
          }}
        >
          {active === categories.indexOf(item) ? (
            <View>
              <Text style={[styles.center, { color: theme.color }]}>
                {item.title}
              </Text>
              <View
                style={[styles.pointer, { backgroundColor: theme.color }]}
              />
            </View>
          ) : (
            <Text
              style={[
                styles.center,
                props.active === props.categories.indexOf(item)
                  ? styles.active
                  : !dark
                  ? styles.inactive
                  : styles.inactiveDark,
              ]}
            >
              {item.title}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;
