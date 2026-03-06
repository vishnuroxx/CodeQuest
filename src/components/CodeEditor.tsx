"use client";

import React from 'react';
import Editor from '@monaco-editor/react';
import { useEditorStore } from '../stores/useEditorStore';
import { defaultMaxListeners } from 'events';

export default function CodeEditor() {
    // Import the global Zustand store for editing
    const { code, setCode } = useEditorStore();

    const handleEditorChange = (value: string | undefined) => {
        setCode(value ?? '');
    };

    return (
        <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value = {code}
        onChange = {handleEditorChange}
        options = {{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
        }}
        />
    )
}
