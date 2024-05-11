import { gql } from '@apollo/client';

export const GET_PAGES = gql`
    query GetPages {
        getPages {
            id,
            title
        }
    }
`;

export const GET_PAGE = gql`
    query Query($id: ID!) {
        getPage(id: $id) {
            id,
            title,
            blocks {
                ... on TextBlock {
                    id,
                    _type,
                    content {
                        text
                    }
                  }
                  ... on QuoteBlock {
                    id,
                    _type,
                    content {
                        quote,
                        author
                    }
                  }
            }
        }
    }
`;

export const CREATE_TEXT_BLOCK = gql`
    mutation CreateTextBlock($pageId: ID!, $input: TextBlockInput) {
        createTextBlock(pageId: $pageId, input: $input) {
            id,
            _type,
            content {
                text
            }
        }
    }
`;

export const UPDATE_TEXT_BLOCK = gql`
    mutation UpdateTextBlock($id: ID!, $input: TextBlockInput) {
        updateTextBlock(id: $id, input: $input) {
            id,
            _type,
            content {
                text
            }
        }
    }
`;

export const DELETE_TEXT_BLOCK = gql`
    mutation DeleteTextBlock($id: ID!) {
        deleteBlock(id: $id) {
            id,
            _type,
            content {
                text
            }
        }
    }
`;