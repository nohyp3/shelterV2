import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'


async function getShelters() {
    try {
        const res = await fetch('https://shelter-backend.vercel.app/api/data');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching shelters:', error);
        return [];
    }
}

export default function ShelterPage() {
    const [shelters, setShelters] = useState<any[]>([]);

    useEffect(() => {
        async function fetchShelters() {
            const data = await getShelters();
            console.log('Fetched data:', data); // Debugging
            setShelters(data);
        }
        fetchShelters();
    }, []);

    return (
        <div>
            <h1>Shelter</h1>
            {shelters?.map((shelter, index) => (
                <div key={index}>
                    {shelter.data.map((org: any, orgIndex: number) => (
                        <div key={orgIndex}>
                            <Link href={`/shelters/${org.id}`}>
                                <div>
                                    <h2>{org.name}</h2>
                                    <p>{org.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}