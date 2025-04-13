import app from "@/src"
import { describe, expect, it } from "bun:test"

describe("Test API", () => {
  it("Should find Hello World", async () => {
    if (!process.env.URL) {
      throw new Error("URL is not set")
    }
    const req = new Request(process.env.URL)
    const res = await app.fetch(req)
    const json = await res.json()
    expect(json.message).toBe("Hello Hono!")
  })
})
