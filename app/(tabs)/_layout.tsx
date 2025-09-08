import { Tabs } from "expo-router";
import {
  CardsThree,
  House,
  MagnifyingGlass,
  UserCircle,
} from "phosphor-react-native";
import { Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <View className="flex items-center justify-center gap-1 mt-4">
      <View
        className={`py-1 px-4 ${focused ? "bg-accent-primary rounded-full" : ""}`}
      >
        {icon}
      </View>
      <Text className="text-[10px] font-inter text-secondary-text">
        {title}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0D0D0F",
          marginBottom: 0,
          borderTopWidth: 0,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={<House size={20} color={focused ? "#0D0D0F" : "#A0A0A0"} />}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Find",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <MagnifyingGlass
                  size={20}
                  color={focused ? "#0D0D0F" : "#A0A0A0"}
                />
              }
              title="Find"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <CardsThree size={20} color={focused ? "#0D0D0F" : "#A0A0A0"} />
              }
              title="Stats"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <UserCircle size={20} color={focused ? "#0D0D0F" : "#A0A0A0"} />
              }
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}
