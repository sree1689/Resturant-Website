import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Some of the spiciest foods from Andhra Pradesh include:

Gongura Pachadi - A tangy and spicy chutney made with gongura leaves, chili peppers, tamarind, and spices.
Kodi Kura - A fiery chicken curry cooked with a blend of chili peppers, tomatoes, onions, and aromatic spices.
Mirapakaya Kura - A hot and sour curry made with bell peppers, tamarind, and a variety of dried red chilies.
Nellore Biryani - A spicy and flavorful rice dish that originates from the Nellore region, featuring meat or vegetables cooked with basmati rice, chili peppers, and an array of spices.
Pachi Pulusu - A tangy and spicy fish or prawn curry that gets its heat from the generous use of green chilies and spices.
Andhra Pradesh is renowned for its fiery and robust cuisine, with many dishes pushing the boundaries of spice tolerance. The liberal use of chilies, tamarind, and aromatic spices contribute to the characteristic heat and tanginess of Andhra Pradesh's signature dishes
        </p>
        <br />
        <p>
        Pandu Mirapakaya Pachadi - Andhra Red Chili Chutney

This spicy chutney is prepared using ripe green chilies. Saute chilies along with tamarind paste or raw tamarind in oil and grind to paste. In a pan heat sesame oil add mustard when it splutters add asafoetida,roasted fengreek powder and add the ground paste and simmer in mild heat till the contents blend well. This chutney is suitable accompaniment for idli,dosa plain or curd rice.


Avakaya Biryani

Avakai pickle is incorporated with whole garam masala ingredients,veggies and basmati rice in preparing this spicy biryani.


Gongkura Pachadi

This is one of the most popular spicy,tangy pachadi in Andhra cuisine prepared using sorrel leaves.


        </p>
      </Box>
    </Layout>
  );
};

export default About;
