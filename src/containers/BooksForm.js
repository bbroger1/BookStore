import React from 'react';
import styled from 'styled-components';


const INPUT = styled.input`
padding: 7px;
margin-right: 3%;
`;

const SELECT = styled.select`
padding: 5px;
background: brown;
color:white;
margin-right: 2%;
`;
const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(el) {
    if (el.target.name === 'title') {
      this.setState({
        title: el.target.value,
      });
    } else if (el.target.name === 'category') {
      this.setState({
        category: el.target.value,
      });
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <form className="input-form">
        <INPUT type="text" value={title} />
        <SELECT name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </SELECT>
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default BooksForm;
