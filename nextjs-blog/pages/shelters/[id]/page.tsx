import { useRouter } from 'next/router';

export default function ShelterPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Shelter</h1>
            <p>Placeholder for shelter with ID: {id}</p>
        </div>
    );
}