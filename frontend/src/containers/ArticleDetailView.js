import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Input } from "antd";
import CustomForm from "../components/Form";
import FormItem from "antd/lib/form/FormItem";


class ArticleDetail extends React.Component {
  state = {
    article: {},
    comment: []
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
    });
    axios.get(`http://127.0.0.1:8000/comments/${articleID}`).then(res => {
      this.setState({
        comment: res.data
      });
    });
  }

  addComment = event => {
    const articleID = this.props.match.params.articleID;
    const content = event.target.elements.comment.value;
    axios.get(`http://127.0.0.1:8000/comments/${articleID}`).then(res => {
      this.setState({
        comment: res.data
      });
    });
    if (this.state.comment.content==null){
      axios.post(`http://127.0.0.1:8000/comments/`, {
        content: content
      });
    }
    else{
      axios.put(`http://127.0.0.1:8000/comments/${articleID}/`, {
        content: content
      });
    }
    // const title = this.state.article.title;
    // var content_old = this.state.article.content;
    // eslint-disable-next-line no-undef
    // content_old=content_old+"\\\\\\n"+content;
    // axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
    //   title: title,
    //   content: content_old
    // });
  }
  handleDelete = event => {
    event.preventDefault();
    const articleID = this.props.match.params.articleID;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
    .then(res => {
      if (res.status === 204) {
        this.props.history.push(`/home/`);
      }
    })
  };

  render() {
    return (
      <div>
        {/* <Card title={this.state.article.title}> */}
          Bộ phận: <p>{this.state.article.title}</p>
          Chi tiết: <p> {this.state.article.content} </p>
        {/* </Card> */}
        {/* <Card title={this.state.comment.content}>
        </Card> */}
          Trả lời của bác sĩ: <p>{this.state.comment.content}</p>
        <form onSubmit={this.addComment}>
          <FormItem label="Trả lời">
            <Input placeholder="Nhập câu trả lời của bạn ở đây" name="comment"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </form>
        <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="Cập nhật" />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Xóa
          </Button>
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

export default connect(mapStateToProps)(ArticleDetail);