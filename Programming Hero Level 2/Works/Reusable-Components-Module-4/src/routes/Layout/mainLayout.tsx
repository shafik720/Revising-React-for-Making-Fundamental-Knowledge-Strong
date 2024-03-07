import { Outlet } from "react-router-dom"
import { Container } from "../../components/container"


export  const MainLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}