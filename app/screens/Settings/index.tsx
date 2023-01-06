import React from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { resetMovie } from "../../store/wishlistSlice";
import { StyleSheet, ScrollView, Switch } from "react-native";
import { Heading, Text, Divider, Box, Button } from "native-base";

import { useTheme } from "../../themes/useTheme";

import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Settings = ({ wishlistData }: any) => {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();

  return (
    <Layout>
      <ScrollView
        style={[styles.contentContainer, { backgroundColor: theme.layoutBg }]}>
        <Card style={{ backgroundColor: theme.cardBg }}>
          <Box>
            <Heading size="md" style={{ color: theme.color }}>
              General Setting
            </Heading>
            <Text style={{ color: theme.color }}>
              Just a simple setting screen for tmdb apps
            </Text>
          </Box>
          <Divider my={4} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            py={4}>
            <Box>
              <Text bold style={{ color: theme.color }}>
                Dark Mode
              </Text>
            </Box>
            <Box>
              <Switch
                value={theme.name === "dark"}
                onValueChange={value => toggleTheme(value)}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={theme.name === "dark" ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            py={4}>
            <Box>
              <Text bold style={{ color: theme.color }}>
                Clear Wishlist
              </Text>
            </Box>
            <Box>
              <Button
                size={`sm`}
                colorScheme="secondary"
                isDisabled={wishlistData.length < 1}
                onPress={() => dispatch(resetMovie())}>
                Clear
              </Button>
            </Box>
          </Box>
          <Divider mt={8} mb={4} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center">
            <Box>
              <Text style={{ color: theme.color }}>
                tmDB Apps - Copyright by akcode
              </Text>
            </Box>
          </Box>
        </Card>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

const mapStateToProps = (state: RootState) => {
  const { wishlist } = state;
  return { wishlistData: wishlist || [] };
};

export default connect(mapStateToProps)(Settings);
