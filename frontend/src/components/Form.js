import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;


class CustomForm extends React.Component {
  
  handleFormSubmit = (event, requestType, articleID) => {
    // event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value
    }

    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `Token ${this.props.token}`,
    // };
    
    if (requestType === "post") {
      axios.post("http://127.0.0.1:8000/api/", postObj);
      this.props.history.push(`/home/`);
    } else if (requestType === "put") {
      axios.put(`http://127.0.0.1:8000/api/${articleID}/`, postObj);
      this.props.history.push(`/home/`);
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={event => this.handleFormSubmit
            (
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <FormItem label="Bộ phận">
            <Input name="title" placeholder="Cho tôi biết bạn bị đau ở đâu" />
          </FormItem>
          <FormItem label="Chi tiết">
            <Input name="content" placeholder="Hãy nói rõ bạn bị những gì" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(CustomForm);