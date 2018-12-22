
import withConnected from "../components/Connected";
import Link from "next/link";
import Head from '../components/Head'

const About = (props) => {

    props.getUsers()

    return (
        <>
            <Head title="About"  description="this is the about page"/> 
            <Link href="/">
              <a className="card">
                <h3>Home Link &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <h1>About</h1>
        </>
    )
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({
    getUsers: dispatch.github.fetchUsers
})

export default withConnected(About, mapState, mapDispatch);