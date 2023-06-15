import "./styles/Profile.css";

export const Profile = () => {
  return (
    <div className="Profile">
      <div className="cover-photo">
        <img
          src="https://cdn.pixabay.com/photo/2023/05/21/07/59/iceberg-8008071_1280.jpg"
          alt="cover photo"
          className="cp"
        />
        <div className="edit-cp">
          <i className="bx bx-edit"></i>
        </div>
        <div className="dp">
          <img src="/public/photo-id.jpg" alt="profile picture" />
        </div>
        <div className="change-profile">
          <i className="bx bx-camera"></i>
        </div>
        <div className="dp-info">
          <p className="dp-name">Lee Mabhena</p>
          <p className="dp-level">Junior | Williams College</p>
          <p className="major">Computer Science & Statistics</p>
        </div>
        <div className="rule"></div>
      </div>
    </div>
  );
};
