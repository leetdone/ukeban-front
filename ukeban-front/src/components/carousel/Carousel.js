import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "353px",
  width: "527px",
  color: "gloden",
  lineHeight: "160px",
  textAlign: "center",
  background: "#c92a1f",
  dots: "false",
};

const starImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAAkCAMAAABGxIQJAAAAXVBMVEUAAAD/sFz/rlT/sVr/sFv/sFz/sFv/sFv/sVr/sVv/sFv/sFz/sVz/sFv/sFv/sFz/sFv/sFv/sFv/sFz/sFv/sFv/r1n/sFz/sVj/sFz/sFv/sFv/sFv/sFz/sFy7pf0cAAAAHnRSTlMA9wgbt3Y04SxaQteb76bIbVGC6YojFM8OwJGvSmVXAXajAAADwUlEQVRo3p2Y6XLiMBCELd+nDI7BB9Dv/5ibpUiGxFPbszP/UkVL6U89I0FyqDTvE1dlY+ETlsvZJ2yW2iecxqvlYyegda3fI2Qu4YjKpUs/kLuEl4DZsn4FbK5QBGD3CFsAD4+wAFD6Dg3D1RQKoPWt74vFCKBKXaEAcl8ogNkUCmDzre+KxR3wxaIAfLGIkFMjoXDFooeygTUUeix4KFyxqAPk1Oj62HyhAHpfKICTIxS+U4swnVoB5wY9lA2MoXDFIh1ewtwRCokFDQUw+kIB9I5QeGJRwHlqEaZTK+DcoIeygTEUrlisw7dwc4SCxeLafgiKsVztT4pzEGEs7Z4uBaTm2t4d9Q6px8UuLHPRhXumQTj124uDVJXvDwIka4t+HH7pQnebGgLkci7iEg7COJ1rAqGZYncQjrG4XwiEZs6r38Jh7E/tF5D6E8IPLxoQLfSlQFArVLe50UDeDxAUIJqZZrp1/xQusWi1tP+FoCoESFEmyQBDbfo7m9euv7N5PfRBxqtUByWvsCY9aOnTfbOs3ypnVIHXh5L22nJqnZLDcwCvPEksLAq1+TiLcFfnS8VJqAOjHDiJTBM2gZNI5SIkJCgLTkJYdAYSLhbdVRc2wUBCWNDu4Cw4CWHBSXAWnISwoCSEBSFBWBASnAUnwVksQkKZF4QEYUHfw2lOJiZhwUhwFpwEZ3ETEsKCk+AshARjwUlwFpyEsOAkhAUnwVkICcaCkOAsOAnOQkhIjVCqt3xZ1hHSukCrlgvPqlAlwd9o2i/MnUrMgEJlPXFhCa3OXNiowgsXzmp+jY46r6PodVQYHHkZ5jaGtd7yqdNR53UUDY68DCtVeLc5Qk3Xn3SGXked1xFnuEJnaHOEhm5w8zLUHQWvo8XZyohGRxN35GSYwsmwhJPhgzBULpCtY1eIPm7DrdIYckchDtr4446GGP7jCtnls9XtwFBxtLRJ0nx76uyO8jJJi8Hcuo2AyJLrHswM52/hvCaXKAzNw+njlCblJgx1R9Uz2OIppNSREPys6xyEoclR/uwI8RSNjkKfJZ8lngpjK4dpff5574Th0dFQvJyLp5o6EoLPymIQhtTR2Mpp5DaG1TvBp6fFxHD9IiimK43h9I1LPPXBMP7yV+Deqs5fDKmj7ufq7WIYf6sQfPfEr5D2Ofvk33qF/8AwCq53Tzx2HYZpPew68tYNnwSP7VbR8VcDnaz95mngrSwE38M//poVe62S3DP23WjO1H131iCnYtUupBMdm9NDDcv0ILrrrp5ONn/x+QN0wHSQWAAJLgAAAABJRU5ErkJggg==";

//add a function name
export default () => (
  <Carousel autoplay={true} dots={false} autoplaySpeed={5000}>
    <div>
      <img src={starImage} alt=""></img>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <img src={starImage} alt=""></img>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <img src={starImage} alt=""></img>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <img src={starImage} alt=""></img>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
)
