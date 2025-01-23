import { primaryColor } from '@/constant/common'
import { ConfigProvider } from 'antd'
import React, { ReactNode } from 'react'

function Theme({ children }: { children: ReactNode }) {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: primaryColor,
            },
            components: {
                Input: {
                    controlHeight: 45,
                },
                Button: {
                    controlHeight: 40,
                },
                Select: {
                    controlHeight: 45,
                }
            }
        }} >
            {children}
        </ConfigProvider>
    )
}

export default Theme