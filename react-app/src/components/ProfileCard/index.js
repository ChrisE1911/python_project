export default function ProfileCard({ user }) {
	return (
		<ul>
			<li>{user.firstname}</li>
			<li>{user.lastname}</li>
			<li>{user.email}</li>
		</ul>
	);
}
