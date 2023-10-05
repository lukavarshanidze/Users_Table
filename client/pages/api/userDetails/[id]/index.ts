import { NextApiRequest, NextApiResponse } from "next";
import ReactDOMServer, { renderToStaticMarkup } from "react-dom/server";
import UserDetails from "@/pages/components/userDetails/UserDetails";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
    res.send(`<div><h1><a style="text-decoration: none" href="/">Back</a></h1><h2>User Details</h2><p>ID: ${req.body.userId}</p><p>Name: ${req.body.userName}</p><p>Email: ${req.body.userEmail}</p><p>City: ${req.body.userCity}</p></div>`)
}