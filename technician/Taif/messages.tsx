import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Messages() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="search-outline" size={21} color="#4B5563" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <ChatItem
          name="Ahmed Al-Fahad"
          message="Are you on the way?"
          time="2m ago"
          unread
        />

        <ChatItem
          name="Sara Al-Saud"
          message="Thank you for your service!"
          time="1h ago"
        />

        <ChatItem
          name="Mohammed Ali"
          message="Can you come earlier?"
          time="Yesterday"
          unread
        />

        <ChatItem
          name="Support Team"
          message="Your application has been approved"
          time="2d ago"
        />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
          onPress={() => router.push("/(auth)/dashboard" as any)}
        />

        <NavItem
          icon="briefcase-outline"
          label="Jobs"
          onPress={() => router.push("/(auth)/active-jobs" as any)}
        />

        <NavItem icon="chatbubble" label="Messages" active />

        <NavItem
          icon="person-outline"
          label="Profile"
          onPress={() => router.push("/(auth)/profile" as any)}
        />
      </View>
    </View>
  );
}

function ChatItem({
  name,
  message,
  time,
  unread,
}: {
  name: string;
  message: string;
  time: string;
  unread?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name[0]}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.chatTop}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <Text
          style={[styles.message, unread && { fontWeight: "900" }]}
          numberOfLines={1}
        >
          {message}
        </Text>
      </View>

      {unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={active ? "#1B1B6D" : "#9AA0A6"} />
      <Text style={[styles.navText, active && styles.navTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  header: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8F0",
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#101828",
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEF0F6",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  chatItem: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 18,
  },

  chatTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    fontWeight: "900",
    color: "#101828",
  },

  time: {
    color: "#9AA0A6",
    fontSize: 11,
  },

  message: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 13,
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: "#1B1B6D",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: "#E6E8F0",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
  },

  navText: {
    fontSize: 10,
    color: "#9AA0A6",
    fontWeight: "900",
  },

  navTextActive: {
    color: "#1B1B6D",
  },
});