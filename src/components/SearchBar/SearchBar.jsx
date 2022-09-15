import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Header, Icon } from "./SearchBar.styled"


export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('')

  const onHandleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return toast.error('Sorry, no empty search');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <Header>
      <Form onSubmit={onHandleSubmit}>
        <Input
          onChange={e => setSearch(e.currentTarget.value)}
          value={search}
          name="search"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Form>
    </Header>
  );
}
