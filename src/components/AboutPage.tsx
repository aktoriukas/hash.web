import React from "react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="box-container">
        <ul className="about-list grid gap-10">
          <li>
            <h3>Password</h3>
            <p>
              is key to lock and unlock your <strong> secrets</strong>. Only correct password can
              decrypt string and show your secrects. That is why we don't need to store your
              password anywhere ( you just need to remember it).
            </p>
          </li>
          <li>
            <h3>String</h3>
            <p>
              this is secrects encrypted using <strong>password</strong>. Save this somewhere safe.
              On return paste it to unlock your secrets.
            </p>
          </li>
          <li>
            <h3>label ➞ secret</h3>
            <p>
              Your secrets are encrypted using <strong> password</strong> as a key and stored in the
              <strong> string</strong>. You can also use auto generator to generate your password.
            </p>
          </li>
        </ul>
        <div className="mt-14 ml-2">
          <p className="text-sm">
            No database is used for this application. Your password is only get's compared with
            provided string.
          </p>
        </div>
      </div>
    </div>
  )
}
