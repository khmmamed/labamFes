import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";

//import Layout
import LayoutContainer, {
  //import layout container

  //  Home page layout have an fixed header
  PageHeader,
  //  main content and main footer
  Main,
  MainHeader,
  MainContent,
  MainFooter
} from "../Layout";

//import header
import { HeaderNav, HeaderInfo } from "../Header";

const items = [
  {
    src:
      "https://www1.sunybroome.edu/wp-content/uploads/2016/10/Program-Banner_CLT.jpg"
  },
  {
    src:
      "https://www.ganjapreneur.com/wp-content/uploads/2017/10/sciencefeature1-1024x480.jpg"
  },
  {
    src:
      "https://www.dental.upenn.edu/wp-content/uploads/2018/10/Research-Support-and-Services-1024x480-1.jpg"
  }
];

const Carrousel = () => <UncontrolledCarousel items={items} />;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsBarScrolled: ""
    };
  }

  handleScroll = () => {
    document.documentElement.scrollTop >= 50
      ? this.setState({ tabsBarScrolled: "tabsSrolledStyle" })
      : this.setState({ tabsBarScrolled: "" });
  };

  getHeaderHeigth(ele) {
    console.log(ele.clientHeigth);
  }

  render() {
    //When Scroll get scroll size and handle this change
    window.onscroll = () => this.handleScroll();

    //Header Layout object
    const layout = {
      pHeader: {
        height: "auto",
        fixed: true,
        customStyle: ""
      },
      pSide: false,
      pFooter: false,
      Main: {}
    };

    return (
      <LayoutContainer pHeader main>
        <PageHeader pHeader={layout.pHeader} id="header" fixed>
          <HeaderNav />
          <HeaderInfo />
        </PageHeader>
        <Main style={{ marginTop: "50px", flexGrow: "1" }}>
          <MainContent>
            <Carrousel />
          </MainContent>
          <MainContent>this is our text offers</MainContent>
        </Main>
      </LayoutContainer>
    );
  }
}

export default Home;

/**
 *      <Header
          class="header"
          tabsClassName={"headerBarNoScroll " + this.state.tabsBarScrolled}
        >
          Hello CodeSandbox
        </Header>
        <Carrousel />
 */
