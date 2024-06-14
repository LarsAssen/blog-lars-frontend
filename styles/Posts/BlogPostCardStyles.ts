import styled from "styled-components";
import { FolderOpen } from "@styled-icons/fa-solid/FolderOpen";
import { Tag } from "@styled-icons/fa-solid/Tag";

export const Card = styled.div`
  background: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.cardShadow},
      0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const CategoryPill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

export const CategoryIcon = styled(FolderOpen)`
  width: 16px; // Set width explicitly
  height: 16px; // Set height explicitly
  margin-right: 0.3rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const TagPill = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

export const TagIcon = styled(Tag)`
  width: 16px; // Set width explicitly
  height: 16px; // Set height explicitly
  margin-right: 0.3rem;
`;

export const DateText = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const StyledPostList = styled.div`
  margin: 50px 50px;
`;

export const TimeToRead = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;
