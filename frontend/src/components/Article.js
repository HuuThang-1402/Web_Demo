import React from "react";
import { List} from "antd";


const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={200}
              alt="logo"
              src="https://t.vietgiaitri.com/2018/10/1/chi-co-bac-si-moi-giup-duoc-e93.jpg"
            />
          }
        >
          <List.Item.Meta
            // avatar={<Avatar src={item.avatar} />}
            title={<a href={`/articles/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;