
function ProfileSettings() {
  return (
    <div>
      <h2>Profile Settings</h2>
      <form>
        <label>
          Change Email:
          <input type="email" placeholder="Enter new email" />
        </label>
        <br />
        <label>
          Change Password:
          <input type="password" placeholder="Enter new password" />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProfileSettings;
