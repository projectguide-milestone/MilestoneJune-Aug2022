import React from "react";
import { Footer } from "../components";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Content>
          <Footer.Item>
            <Footer.Title>Real Home</Footer.Title>
            <Footer.Text>
              13 TungaBhadra Road,Malleshwaram Bangalore
            </Footer.Text>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Icon name="fas fa-phone-alt" social="true" />
                <Footer.Text>8618574713</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-whatsapp" social="true" />
                <Footer.Text>8618574713</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="far fa-envelope" social="true" />
                <Footer.Text>HouseMarketPlace@gmail.com</Footer.Text>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Quick Links</Footer.Subtitle>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Anchor to="/">Home</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/listing">Properties</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/agents">Agents</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/faqs">FAQs</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/dashboard">Account</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/login">Login</Footer.Anchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Social Links</Footer.Subtitle>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-facebook-f" social="true" />{" "}
                <Footer.ExternalAnchor to="">Facebook</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-twitter" social="true" />{" "}
                <Footer.ExternalAnchor to="">Twitter</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-linkedin" social="true" />{" "}
                <Footer.ExternalAnchor to="">Linkedin</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-youtube" social="true" />{" "}
                <Footer.ExternalAnchor to="">YouTube</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-instagram" social="true" />{" "}
                <Footer.ExternalAnchor to="">Instagram</Footer.ExternalAnchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
         
        </Footer.Content>
      </Footer.Container>
      <Footer.Bottom>
        <Footer.Container>
          <Footer.Text>&copy; House MarketPlace System. All Rights Reserved</Footer.Text>
        </Footer.Container>
      </Footer.Bottom>
    </Footer>
  );
};

export default FooterContainer;
