import ResetButton from '@/components/form/reset-button';
import SubmitButton from '@/components/form/submit-button';

export default function FormFooter() {
  return (
    <div className="flex flex-row justify-end gap-6">
      <ResetButton>Reset</ResetButton>
      <SubmitButton>Save Changes</SubmitButton>
    </div>
  );
}
