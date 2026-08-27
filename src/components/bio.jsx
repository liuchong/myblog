import * as React from "react"

import { withBasePath } from "../path-utils.js"

const Bio = ({ author, basePath }) => {
  const link = author?.link

  return (
    <div className="bio">
      {author?.avatar && (
        <img
          className="bio-avatar"
          src={withBasePath(author.avatar, basePath)}
          width={50}
          height={50}
          alt={author.avatarAlt || author.name || "Profile picture"}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {link && (
            <>
              {` `}
              <a href={link.href}>{link.label}</a>
            </>
          )}
        </p>
      )}
    </div>
  )
}

export default Bio
