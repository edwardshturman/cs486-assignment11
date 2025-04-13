import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

app.use("/", cors()) // TODO: restrict origin based on ENV
app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" })
})

export default {
  port: 8081,
  fetch: app.fetch
}
