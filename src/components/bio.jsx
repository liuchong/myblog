import * as React from "react"

const Bio = ({ author, social }) => {
  return (
    <div className="bio">
      <img
        className="bio-avatar"
        src="/images/profile-pic.png"
        width={50}
        height={50}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://github.com/${social?.github || ``}`}>
            You should fork him on Gaythub
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
