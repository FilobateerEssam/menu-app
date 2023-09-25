import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

const ItemList = ({ ItemsData }) => {
  return (
    <Row>
    <Zoom>
      {ItemsData.length >= 1 ? (
        ItemsData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <Card
                className="d-flex flex-row"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <Card.Img
                  style={{ height: "180px", width: "252px" , borderRadius: "5px"
                }}
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>


                  <Card.Text className="py-2">
                    <div className="item-description">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h1 className="text-center" style={{ color: "red" }}>
          {" "}
          لا يوجد اصناف لعرضها
        </h1>
      )}
      </Zoom>
    </Row>
  );
};

export default ItemList;
