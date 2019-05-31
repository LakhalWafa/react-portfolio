import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import design1 from '../img/design1.png';
import design2 from '../img/design2.png';
import design3 from '../img/design3.png';
import design4 from '../img/design4.png';
import design5 from '../img/design5.png';
import design6 from '../img/design6.png';
import design7 from '../img/design7.png';
import design8 from '../img/design8.png';
import design9 from '../img/design9.png';
import design10 from '../img/design10.png';
import design11 from '../img/design11.png';
import design12 from '../img/design12.png';
import design13 from '../img/design13.png';
import design14 from '../img/design14.png';
import design15 from '../img/design15.png';
import design16 from '../img/design16.png';
import design17 from '../img/design17.png';
import design18 from '../img/design18.png';
import design19 from '../img/design19.png';
import design20 from '../img/design20.jpg';
import design21 from '../img/design21.jpg';
import design22 from '../img/design22.jpg';
import design23 from '../img/design23.jpg';
import design24 from '../img/design24.jpg';
import design25 from '../img/design25.jpg';
import design26 from '../img/design26.jpg';
import design27 from '../img/design27.jpg';
import design28 from '../img/design28.jpg';
import range from 'lodash/range';

export default class Carousel extends React.Component {
  componentWillMount() {
    this.setState({
      children: [
        design1,
        design2,
        design3,
        design4,
        design5,
        design6,
        design7,
        design8,
        design9,
        design10,
        design11,
        design12,
        design13,
        design14,
        design15,
        design16,
        design17,
        design18,
        design19,
        design20,
        design21,
        design22,
        design23,
        design24,
        design25,
        design26,
        design27,
        design28
      ],
      activeItemIndex: 0
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(28)
      });
    }, 100);
  }

  createChildren = n =>
    range(n).map(i => (
      <img src={this.state.children[i]} className="img-fluid" alt="" key={i} />
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div>Placeholder</div>}
        // Carousel configurations
        numberOfCards={2}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={30}
        rightChevron={<i class="fas fa-caret-right" />}
        leftChevron={<i class="fas fa-caret-left" />}
        outsideChevron={true}
      >
        {children}
      </ItemsCarousel>
    );
  }
}
