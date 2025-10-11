'use client';
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h3 style={{ marginBottom: "20px" }}>Profile</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          defaultValue="alice"
          placeholder="Username"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          defaultValue="123"
          placeholder="Password"
          type="password"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <select
          defaultValue="FACULTY"
          id="wd-role"
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <Link
          href="/Account/Signin"
          style={{
            textAlign: "center",
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Save
        </Link>

        <Link
          href="/Account/Signin"
          style={{ textAlign: "center", color: "blue", textDecoration: "underline" }}
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
