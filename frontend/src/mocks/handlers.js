import { rest } from "msw";

const baseURL = "/api";

export const handlers = [
  rest.get(`${baseURL}/dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 2,
        "username": "ben",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 2,
        "profile_image": "https://res.cloudinary.com/djxclxygo/image/upload/v1/media/images/filmcard3_xs9zxw"
    })
    );
  }),
  rest.post(`${baseURL}/dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];