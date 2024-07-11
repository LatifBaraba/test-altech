interface pricingListInterface {
    title: string
    tier: string
    desc: string[]
}

export const pricingList: pricingListInterface[] = [
    {
        title: 'Basic',
        tier: 'Tier 1',
        desc: ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan'],
    },
    {
        title: 'Business',
        tier: 'Tier 2',
        desc: [
            'Mencatat barang masuk dan keluar',
            'Mencatat Keuntungan',
            'Dapat menganalisa hasil penjualan dengan CHART',
            'Support 7x24 Jam',
        ],
    },
    {
        title: 'Entrepreneur',
        tier: 'Tier 3',
        desc: [
            'Mencatat barang masuk dan keluar',
            'Mencatat Keuntungan',
            'Dapat menganalisa hasil penjualan dengan CHART',
            'Support 7x24 Jam',
            'Export data ke Excel',
            'AI Prediksi penghasilan',
        ],
    },
]
